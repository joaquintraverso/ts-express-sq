import User from "../api/models/User"

let dbInit = async () => {
  try {
    await User.sync( { force: false } )
  } catch (error) {
    console.log(error);
  }
}

export default dbInit;