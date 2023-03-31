import { AllowanceState } from './bridge';
import { prepareTransaction } from './etheretum';

const iframe = document.getElementById('quv-iframe') as HTMLIFrameElement;
const buttonUp = document.getElementById('sign-button-up') as HTMLButtonElement;
const buttonDown = document.getElementById(
  'sign-button-down'
) as HTMLButtonElement;

console.debug('iframe', iframe);

let quvState: AllowanceState | null = null;

if (iframe && buttonUp && buttonDown) {
  window.addEventListener('message', (event) => {
    if (event.data && event.data.source === 'quv') {
      console.debug('Event from QUV', event.data);

      if (event.data.type === 'UPDATE') {
        quvState = event.data.payload;
      }
    }
  });

  console.debug('Adding event listener to button');
  buttonUp.addEventListener('click', async () => {
    if (
      quvState &&
      quvState.address &&
      quvState.allowance &&
      quvState.contract
    ) {
      const tx = await prepareTransaction({
        address: quvState.address,
        upOrDown: true,
      });

      console.debug('Signed transaction:', { tx, quvState });

      iframe.contentWindow.postMessage(
        {
          type: 'quv:request',
          payload: {
            transaction: tx,
          },
        },
        '*'
      );
    }
  });

  buttonDown.addEventListener('click', async () => {
    if (
      quvState &&
      quvState.address &&
      quvState.allowance &&
      quvState.contract
    ) {
      const tx = await prepareTransaction({
        address: quvState.address,
        upOrDown: false,
      });

      console.debug('Signed transaction:', { tx, quvState });

      iframe.contentWindow.postMessage(
        {
          type: 'quv:request',
          payload: {
            transaction: tx,
          },
        },
        '*'
      );
    }
  });

  console.debug('Added event listener to button');
}
