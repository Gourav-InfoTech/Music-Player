export const convertStoMs = (seconds: any): any => {
    let minutes: any = Math.floor(seconds / 60);
    let extraSeconds: any = (seconds % 60).toFixed(0);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;

    return `${minutes}:${extraSeconds}`;
  };