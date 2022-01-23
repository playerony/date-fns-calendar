export interface IDefaultCalendarHeaderProps {
  currentMonth: Date;

  className?: string;

  onLeftArrowClick: () => void;
  onRightArrowClick: () => void;
}
