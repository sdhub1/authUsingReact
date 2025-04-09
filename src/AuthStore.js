import { create } from 'zustand'

export const useStore = create((set) => ({
    auth:false,
    authRole:'staff',
    logout:()=>set({auth:false}), // set auth to true
    login:()=>set({auth:true}), // set auth to true
    }))