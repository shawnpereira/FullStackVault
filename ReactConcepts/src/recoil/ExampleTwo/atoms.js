import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 100,
});
export const jobAtom = atom({
  key: "jobAtom",
  default: 2,
});
export const messageAtom = atom({
  key: "messageAtom",
  default: 12,
});
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 0,
});

export const totalNotification = selector({
  key: "totalNotification",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobAtomCount = get(jobAtom);
    const messageAtomCount = get(messageAtom);
    const notificationAtomCount = get(notificationAtom);

    const store =
      networkAtomCount +
      jobAtomCount +
      messageAtomCount +
      notificationAtomCount;
    return store;
  },
});
