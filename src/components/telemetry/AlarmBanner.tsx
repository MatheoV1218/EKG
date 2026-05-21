import "./AlarmBanner.css";

interface AlarmBannerProps {
  alarms: string[];
}

function AlarmBanner({ alarms }: AlarmBannerProps) {
  if (alarms.length === 0) {
    return <div className="alarm-banner stable">MONITORING • NO CRITICAL ALARMS</div>;
  }

  return (
    <div className="alarm-banner critical">
      {alarms.map((alarm) => (
        <span key={alarm}>{alarm}</span>
      ))}
    </div>
  );
}

export default AlarmBanner;
