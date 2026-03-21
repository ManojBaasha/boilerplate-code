import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiArrowRight,
  HiEnvelope,
  HiOutlineCommandLine,
  HiOutlineCpuChip,
  HiOutlineCodeBracket,
  HiOutlineBolt,
  HiOutlineCheckCircle,
  HiOutlineArrowsRightLeft,
  HiOutlineCloudArrowUp,
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineChatBubbleLeft,
  HiOutlineEye,
  HiOutlineRocketLaunch,
  HiOutlineDocument,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
} from "react-icons/pi";

import { FaGithub, FaXTwitter } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  home: PiHouseDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  github: FaGithub,
  twitter: FaXTwitter,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  eye: HiOutlineEye,
  terminal: HiOutlineCommandLine,
  cpu: HiOutlineCpuChip,
  code: HiOutlineCodeBracket,
  bolt: HiOutlineBolt,
  checkCircle: HiOutlineCheckCircle,
  compare: HiOutlineArrowsRightLeft,
  deploy: HiOutlineCloudArrowUp,
  sparkles: HiOutlineSparkles,
  chartBar: HiOutlineChartBar,
  chat: HiOutlineChatBubbleLeft,
  sun: HiOutlineSun,
  moon: HiOutlineMoon,
};

export function getIcon(name: string): IconType | undefined {
  return iconLibrary[name];
}
