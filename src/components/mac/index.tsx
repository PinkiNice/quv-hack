import './mac.scss';

// @ts-ignore
import mac from './mac.png';

export function Mac({ children }) {
  return (
    <div className="mac">
      <div className="mac__inner">
        <img src={mac} />
        <iframe
          className="mac__iframe"
          src="https://integration-app2.upvsdown.com"
        ></iframe>
        {children}
      </div>
    </div>
  );
}
