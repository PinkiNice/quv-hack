import { useEffect, useRef, useState } from 'react';
import { Button } from './button/button';
import { Mac } from './mac';
import { Noise } from './noise';
import { QuvHeader } from './quv-header/quv-header';
import { AllowanceState } from '../bridge';
import { prepareTransaction } from '../ethereum';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { alchemy } from '../alchemy';
import { formatEther } from 'ethers/lib/utils.js';

let _quvState: AllowanceState | null = null;

window.addEventListener('message', (event) => {
  if (event.data && event.data.source === 'quv') {
    console.debug('Event from QUV', event.data);

    if (event.data.type === 'UPDATE') {
      _quvState = event.data.payload;
    }
  }
});

function usePrevious<T>(value: T): T | null {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current || null;
}

type QuvSignError = {
  hash: null;
  message: string;
};

type QuvSignSuccess = {
  hash: string;
};

type QuvSignResponse = {
  type: 'RESPONSE';
  payload: {
    request: QuvSignRequest;
    response: QuvSignError | QuvSignSuccess;
  };
};

type QuvSignRequest = {
  type: 'quv:request';
  payload: {
    transaction: ReturnType<typeof prepareTransaction>;
  };
};

function isErrorResponse(
  response: QuvSignError | QuvSignSuccess
): response is QuvSignError {
  return !!(response as QuvSignError).message;
}

function isSuccessResponse(
  response: QuvSignError | QuvSignSuccess
): response is QuvSignSuccess {
  return !!(response as QuvSignSuccess).hash;
}

export function App() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [quvState, setQuvState] = useState(_quvState);
  const [isWaiting, setIsWaiting] = useState(false);

  const prevQuvState = usePrevious(quvState);

  console.debug('Quv State, App', quvState);

  useEffect(() => {
    const listener = async (event: MessageEvent<any>) => {
      if (event.data && event.data.source === 'quv') {
        if (event.data.type === 'UPDATE') {
          setQuvState(event.data.payload);
        } else if (event.data.type === 'RESPONSE') {
          const response = event.data as QuvSignResponse;
          const isError = isErrorResponse(response.payload.response);
          const isSuccess = !isError;

          setIsWaiting(false);
          console.debug('Response from QUV', response, {
            isError,
            isSuccess,
          });

          if (isSuccessResponse(response.payload.response)) {
            const hash = response.payload.response.hash;
            const tx = await alchemy.core.getTransaction(hash);

            if (!tx) {
              return;
            }

            try {
              const receipt = await tx.wait(1);
              toast.success(
                <>
                  Transaction succeeded:{' '}
                  <a
                    href={`https://mumbai.polygonscan.com/tx/${hash}`}
                    target="_blank"
                  >
                    {hash}
                  </a>
                </>
              );
            } catch (error) {
              toast.error(
                <>
                  Transaction failed:{' '}
                  <a
                    href={`https://mumbai.polygonscan.com/tx/${hash}`}
                    target="_blank"
                  >
                    {hash}
                  </a>
                </>
              );
            }
          } else if (isErrorResponse(response.payload.response)) {
            const message = response.payload.response.message;
            if (message.includes('Unprocessable Entity')) {
              toast.warn(
                <span>
                  To play game,{' '}
                  <span
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    set an allowance
                  </span>
                </span>
              );
            } else {
              toast.error(
                `Transaction failed: ${response.payload.response.message}`
              );
            }
          }
        }
      }
    };
    window.addEventListener('message', listener);

    return () => {
      window.removeEventListener('message', listener);
    };
  }, []);

  useEffect(() => {
    if (!prevQuvState || !quvState) {
      return;
    }

    const isRealAllowance = (allowance: AllowanceState) => !!allowance.contract;

    console.debug('States', {
      prevQuvState,
      quvState,
    });
    if (
      prevQuvState.allowance.remaining_allowance !== '0' &&
      quvState.allowance.remaining_allowance === '0'
    ) {
      toast.success(
        <>
          <span>
            <span className="toast-base">
              Allowance of{' '}
              <span className="toast-accent">
                {formatEther(
                  prevQuvState?.allowance.remaining_allowance || '0'
                )}{' '}
                MATIC
              </span>{' '}
              was removed
            </span>
          </span>
        </>
      );
    } else if (
      prevQuvState.allowance.contract &&
      prevQuvState.allowance.total_allowance !==
        quvState.allowance.total_allowance
    ) {
      toast.success(
        <>
          <span>
            <span className="toast-base">
              New allowance of{' '}
              <span className="toast-accent">
                {formatEther(quvState?.allowance.remaining_allowance || '0')}{' '}
                MATIC
              </span>{' '}
              was set
            </span>
          </span>
        </>
      );
    }
  }, [quvState]);

  const doBet = async (up: boolean) => {
    if (
      quvState &&
      quvState.address &&
      quvState.allowance &&
      quvState.contract &&
      iframeRef.current &&
      iframeRef.current.contentWindow
    ) {
      const tx = await prepareTransaction({
        address: quvState.address,
        upOrDown: false,
      });

      console.debug('Signed transaction:', { tx, quvState });

      setIsWaiting(true);
      iframeRef.current.contentWindow.postMessage(
        {
          type: 'quv:request',
          payload: {
            transaction: tx,
          },
        },
        '*'
      );
    } else if (!quvState) {
      toast.warn('Quv is not initialized');
    } else if (!quvState.address) {
      toast.warn('Please login before playing');
    }
  };

  return (
    <div>
      <Noise />

      <QuvHeader iframeRef={iframeRef} />
      <h1 className="demo-title">
        Quv <span className="demo-title__gray">x</span> Playnance{' '}
        <span className="demo-title__gray">integration demo</span>
      </h1>
      <p className="demo-subtitle">
        <a href="https://faucet.polygon.technology/">Get testnet MATIC here</a>{' '}
        and watch a <a href="https://vimeo.com/815878391">demo video</a>
      </p>

      <div className="controls">
        <Mac>
          <div className="controls__buttons">
            <Button
              up={true}
              onClick={() => doBet(true)}
              disabled={isWaiting}
            ></Button>
            <Button
              up={false}
              onClick={() => doBet(false)}
              disabled={isWaiting}
            ></Button>
          </div>
        </Mac>
      </div>

      <p className="demo-cookies">
        Nothing is being rendered? You may have cookies disabled. Check{' '}
        <a
          href="https://github.com/PinkiNice/quv-hack#limitations"
          target="_blank"
        >
          this instruction
        </a>{' '}
        on how to enable them.
      </p>
      <ToastContainer
        theme="dark"
        position="top-left"
        style={{
          top: '100px',
        }}
      />
    </div>
  );
}
