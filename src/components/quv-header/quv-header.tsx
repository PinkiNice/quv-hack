import './quv-header.scss';

export function QuvHeader({
  iframeRef,
}: {
  iframeRef: React.RefObject<HTMLIFrameElement>;
}) {
  return (
    <div className="quv-header">
      <div className="quv-header__inner">
        <iframe
          ref={iframeRef}
          id="quv-iframe"
          src="http://localhost:3000/iframe/0xe9c238201373FA63E402f85Ff7d954782F271ceA"
        ></iframe>
      </div>
    </div>
  );
}
