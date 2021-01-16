module.exports = Object.freeze({
  TOKEN: '1587614781:AAHaBaC3RgWgC8-rWzrteA1f_FsOwHAhCYs',
  ARIA_SECRET: '917707263:AAH9kfRGuz23FJC1NsLAcqD1I2_-GaUPP3s',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/download/dir (no trailing "/")',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '1a41o7swcv_k4ZlcvoKu5LvTpjSLvWIsO',
  SUDO_USERS: [253131957,1292990399],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001271692314],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 5000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: false,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@ARA_CLouD_001_BoT"
  },
  IS_TEAM_DRIVE: false
});
