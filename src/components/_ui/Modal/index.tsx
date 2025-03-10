import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  isOpen: boolean;
  onClose: Function;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className={styles.dialog} onClose={() => onClose()}>
        <Transition.Child
          as={Fragment}
          enter='ease-out desktop:duration-300 duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in desktop:duration-200 duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className={styles.overlay} />
        </Transition.Child>

        <div className={styles.wrapper}>
          <Transition.Child
            as={Fragment}
            enter={styles.transitionEnter}
            enterFrom={styles.transitionEnterFrom}
            enterTo={styles.transitionEnterTo}
            leave={styles.transitionLeave}
            leaveFrom={styles.transitionLeaveFrom}
            leaveTo={styles.transitionLeaveTo}
          >
            <Dialog.Panel className={styles.panel}>
              <div className={styles.content}>{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
