import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiArrowRight,
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
  openLink: HiOutlineLink,
  home: PiHouseDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  github: FaGithub,
  twitter: FaXTwitter,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
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
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
