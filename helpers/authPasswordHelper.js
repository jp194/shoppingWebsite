const bcrypt = require("bcrypt");

module.exports = {
  hashPassword: async (password) => {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      //saltRounds basically means numbher of times hashing is done more the saltRounds more the cpu usage

      return hashedPassword;
    } catch (error) {
      console.log(error);
    }
  },
  comparePassword: async (pass, hashPass) => {
    return bcrypt.compare(pass, hashPass);
  },
};
