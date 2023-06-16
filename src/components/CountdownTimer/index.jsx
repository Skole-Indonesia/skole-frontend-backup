import React from "react";
import DateTimeDisplay from "./dateTimeDisplay";
import { useCountdown } from "./useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white w-min px-6 py-4 my-4 rounded-lg gap-x-4 justify-center">
      <h1 className="text-xl font-semibold whitespace-nowrap text-black md:text-2xl block">
        Promo berakhir pada
      </h1>
      <div className="flex justify-center items-center gap-x-2">
        <DateTimeDisplay value={days} type={"Hari"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Jam"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Menit"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Detik"} isDanger={false} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
