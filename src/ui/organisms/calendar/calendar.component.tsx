import classnames from 'classnames';
import {
  addMonths,
  addWeeks,
  isSameDay,
  isSameMonth,
  isWeekend,
  subMonths,
  subWeeks,
} from 'date-fns';
import { Children, MouseEvent, memo, useEffect, useState } from 'react';

import { generateDatesArray, generateMonth, generateWeek, useDeviceDetect } from '@utils';

import { MEDIUM_SCREEN_BREAKPOINT } from '@infrastructure';

import { ICalendarProps } from './calendar.types';
import { DefaultCalendarHeader, DesktopCalendarCard, MobileCalendarCard } from './parts';

import './calendar.styles.scss';

const CalendarComponent = ({
  events,
  components,
  mode = 'month',
  onCalendarEventClick,
  onSelectedDatesChange,
  displayWeekends = true,
  defaultSelectedDates = [],
  enableDateSelection = true,
  defaultSelectedDate = new Date(),
  selectedDates: customSelectedDates,
}: ICalendarProps): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState(defaultSelectedDate);
  const [selectionStartDate, setSelectionStartDate] = useState<Date | null>(null);
  const [selectedDates, setSelectedDates] = useState<Date[]>(defaultSelectedDates);

  const { windowSize } = useDeviceDetect();
  const shouldRenderMobileCards = windowSize.width < MEDIUM_SCREEN_BREAKPOINT;
  const isOneWeekMode = mode === 'week' || shouldRenderMobileCards;

  const currentMonth = generateMonth(selectedDate);

  const { Header = DefaultCalendarHeader } = components || {};

  useEffect(() => {
    if (onSelectedDatesChange) {
      onSelectedDatesChange(selectedDates);
    }
  }, [JSON.stringify(selectedDates)]);

  useEffect(() => {
    if (customSelectedDates) {
      setSelectedDates(customSelectedDates);
    }
  }, [customSelectedDates]);

  useEffect(() => {
    setSelectedDates([]);
  }, [shouldRenderMobileCards]);

  const onRightArrowClick = () => {
    const functionToExecute = isOneWeekMode ? addWeeks : addMonths;
    const newSelectedDate = functionToExecute(selectedDate, 1);

    setSelectedDate(newSelectedDate);
  };

  const onLeftArrowClick = () => {
    const functionToExecute = isOneWeekMode ? subWeeks : subMonths;
    const newSelectedDate = functionToExecute(selectedDate, 1);

    setSelectedDate(newSelectedDate);
  };

  const onMouseDown = (date: Date) => (event: MouseEvent) => {
    if (event.currentTarget !== event.target) return;

    if (!enableDateSelection) {
      return;
    }

    setSelectedDates([date]);
    setSelectionStartDate(date);
  };

  const onMouseUp = () => {
    if (!enableDateSelection) {
      return;
    }

    setSelectionStartDate(null);
  };

  const onMouseOver = (date: Date) => () => {
    if (!enableDateSelection || !selectionStartDate) {
      return;
    }

    const generatedDatesArray = generateDatesArray(selectionStartDate, date);

    setSelectedDates([selectionStartDate, ...generatedDatesArray, date]);
  };

  const getEventsForDate = (date: Date) => events.filter((_event) => isSameDay(_event.start, date));

  const dataToProcess = isOneWeekMode ? [generateWeek(selectedDate)] : currentMonth;
  const CalendarCard = shouldRenderMobileCards ? MobileCalendarCard : DesktopCalendarCard;

  return (
    <div className="calendar-wrapper">
      <Header
        className="calendar-wrapper__header"
        currentMonth={selectedDate}
        onLeftArrowClick={onLeftArrowClick}
        onRightArrowClick={onRightArrowClick}
      />
      <div
        className={classnames(
          'calendar-wrapper__calendar',
          shouldRenderMobileCards && 'calendar-wrapper__calendar--mobile',
          !shouldRenderMobileCards && displayWeekends && 'calendar-wrapper__calendar--weekends',
        )}
        id="calendar-wrapper"
        onMouseDown={(event) => {
          // @ts-expect-error
          if (event.target.id) {
            setSelectedDates([]);
            setSelectionStartDate(null);
          }
        }}
        onMouseUp={onMouseUp}
      >
        {Children.toArray(
          dataToProcess.map((_currentWeek) => (
            <>
              {Children.toArray(
                _currentWeek.map((_currentDay) => {
                  const weekend = isWeekend(_currentDay);

                  if (weekend && !displayWeekends) {
                    return null;
                  }

                  const currentDayEvents = getEventsForDate(_currentDay);
                  const sameMonth = isSameMonth(selectedDate, _currentDay);
                  const selected = selectedDates.some((_date) => isSameDay(_date, _currentDay));

                  return (
                    <CalendarCard
                      date={_currentDay}
                      events={currentDayEvents}
                      sameMonth={sameMonth}
                      selected={selected}
                      onCalendarEventClick={onCalendarEventClick}
                      onMouseDown={onMouseDown(_currentDay)}
                      onMouseOver={onMouseOver(_currentDay)}
                      onMouseUp={onMouseUp}
                    />
                  );
                }),
              )}
            </>
          )),
        )}
      </div>
    </div>
  );
};

export const Calendar = memo(CalendarComponent);
