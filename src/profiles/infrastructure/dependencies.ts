//IMPORT CREATE USE CASE
import { CreateProfileUseCase } from "../application/CreateProfileUseCase";
import { CreateProfileController } from "./controller/CreateProfileController";

//IMPORT REPOSITORY
import { ProfileRepository_impl } from "./ProfileRepository_impl";

//INSTANCE REPOSITORY
const profileRepo = new ProfileRepository_impl();

//CREATE USE CASE FUNCTION
export const createProfile = new CreateProfileUseCase(profileRepo);
export const createProfileController = new CreateProfileController(createProfile);

///////////////////////////////////

//IMPORT DELETE USE CASE
import { DeleteProfileUseCase } from "../application/DeleteProfileUseCase";
import { DeleteProfileController } from "./controller/DeleteProfileController";

//DELETE USE CASE FUNCTION
export const deleteProfile = new DeleteProfileUseCase(profileRepo);
export const deleteProfileController = new DeleteProfileController(deleteProfile);

//////////////////////////

//IMPORT GET USE CASE
import { GetProfileUseCase } from "../application/GetProfileUseCase";
import { GetProfileController } from "./controller/GetProfileController";

//DELETE USE CASE FUNCTION
export const getProfile = new GetProfileUseCase(profileRepo);
export const getProfileController = new GetProfileController(getProfile);

///////////////////

//IMPORT UPDATE USE CASE
import { UpdateProfileUseCase } from "../application/UpdateProfileUseCase";
import { UpdateProfileController } from "./controller/UpdateProfileController";

//DELETE USE CASE FUNCTION
export const updateProfile = new UpdateProfileUseCase(profileRepo);
export const updateProfileController = new UpdateProfileController(updateProfile);
