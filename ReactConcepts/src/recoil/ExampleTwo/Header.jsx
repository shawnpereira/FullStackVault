import {
  networkAtom,
  jobAtom,
  messageAtom,
  notificationAtom,
  totalNotification,
} from "./recoil/ExampleTwo/atoms";
import { useRecoilValue } from "recoil";

export default function Header() {
  const net = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobAtom);
  const messageCount = useRecoilValue(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom);

  const totalValueCount = useRecoilValue(totalNotification);
  return (
    <div>
      <button>Home</button>
      <button>My network({net}) </button>
      <button>Jobs({jobCount})</button>
      <button>Messages({messageCount})</button>
      <button>Notification({notificationCount})</button>
      <button>Me ({totalValueCount})</button>
    </div>
  );
}
