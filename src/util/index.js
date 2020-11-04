const LastUploadTime = lastUploaded => {
  const delta = new Date() - new Date(lastUploaded);
  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = new Date(delta).getHours();
  return {days, hours};
};

const FormatBytes = (bytes, decimals = 0) => {
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const size = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
  return `${size} ${sizes[i]}`;
};

export {LastUploadTime, FormatBytes};
