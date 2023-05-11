export interface UserInfo {
    roomId: string,
    userName: string
}

export interface UserInfoContextType {
    userInfo: UserInfo,
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfoContextType>>
}

export const userInfoContextInitValues: UserInfoContextType = {
    userInfo: {
        roomId: '',
        userName: ''
    },
    setUserInfo: () => { }
}