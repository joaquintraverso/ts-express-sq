import User, { UserInput, UserOutput } from "../models/User";

export let createUser = async (data: UserInput): Promise<UserOutput> =>  {
  try {
    let user = await User.create(data)
    return user.toJSON() as UserOutput;
  
  } catch (error) {
    throw error;  
  }
}

export let getUser = async (id: number): Promise<UserOutput | null> => {
  
  try {
    let user = await User.findByPk(id);
    return user ? user.toJSON() as UserOutput : null;
  } catch (error) {
    throw error;
  }
}


export let updateUser = async (id: number, data: Partial<UserInput>): Promise<UserOutput | null> => {

  try {
    let user = await User.findByPk(id);
  
    if (!user){
      return null;
    }
  
    await user.update(data);
  
    return user.toJSON() as UserOutput
    
  } catch (error) {
    throw error;
  }
}

export let deleteUser = async (id: number): Promise<UserOutput | null> => {

  try {
    let user = await User.findByPk(id);
  
    if (!user){
      return null   
    }
  
    await user.destroy();
  
    return user.toJSON() as UserOutput;

  } catch (error) {
    throw error;
  }
}
