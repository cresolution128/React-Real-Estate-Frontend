import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';
import { Transition } from '@headlessui/react';

type Props = {
  isOpened?: boolean;
  setIsOpened?: Function;
  title?: string;
  description?: string;
  index?: number;
};

const AccordionCard: React.FC<Props> = ({
  isOpened = false,
  setIsOpened = () => {},
  title = '',
  description = '',
  index = 0,
}) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.buttonHeader}
        role='button'
        onClick={() => {
          isOpened ? setIsOpened(-1) : setIsOpened(index);
        }}
      >
        <button
          className={classNames(styles.button, { [styles.opened]: isOpened })}
        >
          <div>{title}</div>
          <div className={styles.add}>
            {isOpened ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </div>
        </button>
      </div>
      <Transition
        show={isOpened}
        enter='transition-transform duration-500 origin-top'
        enterFrom='scale-y-0'
        enterTo='scale-y-100'
        leave='transition-transform duration-500 origin-top'
        leaveFrom='scale-y-100'
        leaveTo='scale-y-0'
      >
        <div className={styles.cardBody}>
          <p>{description}</p>
        </div>
      </Transition>
    </div>
  );
};

export default AccordionCard;
