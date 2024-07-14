import { User } from "./user";

export interface IProfile {
    username: string;
    displayName: string;
    image?: string;
    bio?: string;
    photos?: Photo[]
}

export class Profile implements IProfile {
    constructor(user: User) {
        this.username = user.username;
        this.displayName = user.displayName;
        this.image = user.image;
    }
    
    username: string;
    displayName: string;
    image?: string;
    bio?: string;
    photos?: Photo[]
}

export interface Photo {
    id: string;
    url: string;
    isMain: boolean;
}

export class ProfileFormValues {
    username: string = '';
    displayName: string = '';
    image?: string;
    bio?: string;
    photos?: Photo[]

    constructor(profile?: ProfileFormValues) {
        if (profile) {
            this.username = profile.username;
            this.displayName = profile.displayName;
            this.image = profile.image;
            this.bio = profile.bio;
            this.photos = profile.photos;
        }
    }
}