import React from 'react'

import styles from './style.module.css'
import getClassNames from '../utils/getClassNames'

export default function ButtonIcon({ icon, className: V2, ...rest }) {
  const getClasses = getClassNames(V2, styles['button-icon'])

  return (
    (icon === 'arrow-top-normal' && (
      <div className={getClasses} {...rest}>
        &#xe800;
      </div>
    )) ||
    (icon === 'arrow-right-normal' && (
      <div className={getClasses} {...rest}>
        &#xe801;
      </div>
    )) ||
    (icon === 'arrow-bottom-normal' && (
      <div className={getClasses} {...rest}>
        &#xe802;
      </div>
    )) ||
    (icon === 'arrow-left-normal' && (
      <div className={getClasses} {...rest}>
        &#xe803;
      </div>
    )) ||
    (icon === 'arrow-top-bold' && (
      <div className={getClasses} {...rest}>
        &#xe804;
      </div>
    )) ||
    (icon === 'arrow-right-bold' && (
      <div className={getClasses} {...rest}>
        &#xe805;
      </div>
    )) ||
    (icon === 'arrow-bottom-bold' && (
      <div className={getClasses} {...rest}>
        &#xe806;
      </div>
    )) ||
    (icon === 'arrow-left-bold' && (
      <div className={getClasses} {...rest}>
        &#xe807;
      </div>
    )) ||
    (icon === 'plus-normal' && (
      <div className={getClasses} {...rest}>
        &#xe808;
      </div>
    )) ||
    (icon === 'plus-bold' && (
      <div className={getClasses} {...rest}>
        &#xe809;
      </div>
    )) ||
    (icon === 'icon-angle-up-normal' && (
      <div className={getClasses} {...rest}>
        &#xe80a;
      </div>
    )) ||
    (icon === 'icon-angle-right-normal' && (
      <div className={getClasses} {...rest}>
        &#xe80b;
      </div>
    )) ||
    (icon === 'icon-angle-down-normal' && (
      <div className={getClasses} {...rest}>
        &#xe80c;
      </div>
    )) ||
    (icon === 'icon-angle-left-normal' && (
      <div className={getClasses} {...rest}>
        &#xe80d;
      </div>
    )) ||
    (icon === 'icon-angle-up-bold' && (
      <div className={getClasses} {...rest}>
        &#xe80e;
      </div>
    )) ||
    (icon === 'icon-angle-right-bold' && (
      <div className={getClasses} {...rest}>
        &#xe81f;
      </div>
    )) ||
    (icon === 'icon-angle-down-bold' && (
      <div className={getClasses} {...rest}>
        &#xe810;
      </div>
    )) ||
    (icon === 'icon-angle-left-bold' && (
      <div className={getClasses} {...rest}>
        &#xe811;
      </div>
    )) ||
    (icon === 'icon-arrow-out-of-box-up-normal' && (
      <div className={getClasses} {...rest}>
        &#xe812;
      </div>
    )) ||
    (icon === 'icon-arrow-out-of-box-right-normal' && (
      <div className={getClasses} {...rest}>
        &#xe813;
      </div>
    )) ||
    (icon === 'icon-arrow-out-of-box-down-normal' && (
      <div className={getClasses} {...rest}>
        &#xe814;
      </div>
    )) ||
    (icon === 'icon-arrow-out-of-box-left-normal' && (
      <div className={getClasses} {...rest}>
        &#xe815;
      </div>
    )) ||
    (icon === 'icon-arrow-out-of-box-up-bold' && (
      <div className={getClasses} {...rest}>
        &#xe816;
      </div>
    )) ||
    (icon === 'icon-arrow-out-of-box-right-bold' && (
      <div className={getClasses} {...rest}>
        &#xe817;
      </div>
    )) ||
    (icon === 'icon-arrow-out-of-box-down-bold' && (
      <div className={getClasses} {...rest}>
        &#xe818;
      </div>
    )) ||
    (icon === 'icon-arrow-out-of-box-left-bold' && (
      <div className={getClasses} {...rest}>
        &#xe819;
      </div>
    )) ||
    (icon === 'icon-calender-normal' && (
      <div className={getClasses} {...rest}>
        &#xe81a;
      </div>
    )) ||
    (icon === 'icon-calender-bold' && (
      <div className={getClasses} {...rest}>
        &#xe81b;
      </div>
    )) ||
    (icon === 'icon-category-normal' && (
      <div className={getClasses} {...rest}>
        &#xe81c;
      </div>
    )) ||
    (icon === 'icon-category-bold' && (
      <div className={getClasses} {...rest}>
        &#xe81d;
      </div>
    )) ||
    (icon === 'icon-chat-normal' && (
      <div className={getClasses} {...rest}>
        &#xe81e;
      </div>
    )) ||
    (icon === 'icon-chat-bold' && (
      <div className={getClasses} {...rest}>
        &#xe81f;
      </div>
    )) ||
    (icon === 'icon-check-normal' && (
      <div className={getClasses} {...rest}>
        &#xe820;
      </div>
    )) ||
    (icon === 'icon-check-bold' && (
      <div className={getClasses} {...rest}>
        &#xe821;
      </div>
    )) ||
    (icon === 'icon-desktop-normal' && (
      <div className={getClasses} {...rest}>
        &#xe822;
      </div>
    )) ||
    (icon === 'icon-desktop-bold' && (
      <div className={getClasses} {...rest}>
        &#xe823;
      </div>
    )) ||
    (icon === 'icon-drag-normal' && (
      <div className={getClasses} {...rest}>
        &#xe824;
      </div>
    )) ||
    (icon === 'icon-drag-bold' && (
      <div className={getClasses} {...rest}>
        &#xe825;
      </div>
    )) ||
    (icon === 'icon-duplicate-normal' && (
      <div className={getClasses} {...rest}>
        &#xe826;
      </div>
    )) ||
    (icon === 'icon-duplicate-bold' && (
      <div className={getClasses} {...rest}>
        &#xe827;
      </div>
    )) ||
    (icon === 'icon-edit-normal' && (
      <div className={getClasses} {...rest}>
        &#xe828;
      </div>
    )) ||
    (icon === 'icon-edit-bold' && (
      <div className={getClasses} {...rest}>
        &#xe829;
      </div>
    )) ||
    (icon === 'icon-elipsis-normal' && (
      <div className={getClasses} {...rest}>
        &#xe82a;
      </div>
    )) ||
    (icon === 'icon-elipsis-bold' && (
      <div className={getClasses} {...rest}>
        &#xe82b;
      </div>
    )) ||
    (icon === 'icon-envelope-normal' && (
      <div className={getClasses} {...rest}>
        &#xe82c;
      </div>
    )) ||
    (icon === 'icon-envelope-bold' && (
      <div className={getClasses} {...rest}>
        &#xe82d;
      </div>
    )) ||
    (icon === 'icon-exclamation-normal' && (
      <div className={getClasses} {...rest}>
        &#xe82e;
      </div>
    )) ||
    (icon === 'icon-exclamation-bold' && (
      <div className={getClasses} {...rest}>
        &#xe82f;
      </div>
    )) ||
    (icon === 'icon-external-link-normal' && (
      <div className={getClasses} {...rest}>
        &#xe830;
      </div>
    )) ||
    (icon === 'icon-external-link-bold' && (
      <div className={getClasses} {...rest}>
        &#xe831;
      </div>
    )) ||
    (icon === 'icon-eye-normal' && (
      <div className={getClasses} {...rest}>
        &#xe832;
      </div>
    )) ||
    (icon === 'icon-eye-bold' && (
      <div className={getClasses} {...rest}>
        &#xe833;
      </div>
    )) ||
    (icon === 'icon-eye-slash-normal' && (
      <div className={getClasses} {...rest}>
        &#xe834;
      </div>
    )) ||
    (icon === 'icon-eye-slash-bold' && (
      <div className={getClasses} {...rest}>
        &#xe835;
      </div>
    )) ||
    (icon === 'icon-heart-normal' && (
      <div className={getClasses} {...rest}>
        &#xe836;
      </div>
    )) ||
    (icon === 'icon-heart-bold' && (
      <div className={getClasses} {...rest}>
        &#xe837;
      </div>
    )) ||
    (icon === 'icon-home-normal' && (
      <div className={getClasses} {...rest}>
        &#xe838;
      </div>
    )) ||
    (icon === 'icon-home-bold' && (
      <div className={getClasses} {...rest}>
        &#xe839;
      </div>
    )) ||
    (icon === 'icon-image-normal' && (
      <div className={getClasses} {...rest}>
        &#xe83a;
      </div>
    )) ||
    (icon === 'icon-image-bold' && (
      <div className={getClasses} {...rest}>
        &#xe83b;
      </div>
    )) ||
    (icon === 'icon-info-normal' && (
      <div className={getClasses} {...rest}>
        &#xe83c;
      </div>
    )) ||
    (icon === 'icon-info-bold' && (
      <div className={getClasses} {...rest}>
        &#xe83d;
      </div>
    )) ||
    (icon === 'icon-lock-normal' && (
      <div className={getClasses} {...rest}>
        &#xe83e;
      </div>
    )) ||
    (icon === 'icon-lock-bold' && (
      <div className={getClasses} {...rest}>
        &#xe83f;
      </div>
    )) ||
    (icon === 'icon-menu-normal' && (
      <div className={getClasses} {...rest}>
        &#xe840;
      </div>
    )) ||
    (icon === 'icon-menu-bold' && (
      <div className={getClasses} {...rest}>
        &#xe841;
      </div>
    )) ||
    (icon === 'icon-minus-normal' && (
      <div className={getClasses} {...rest}>
        &#xe842;
      </div>
    )) ||
    (icon === 'icon-minus-bold' && (
      <div className={getClasses} {...rest}>
        &#xe843;
      </div>
    )) ||
    (icon === 'icon-mobile-normal' && (
      <div className={getClasses} {...rest}>
        &#xe844;
      </div>
    )) ||
    (icon === 'icon-mobile-bold' && (
      <div className={getClasses} {...rest}>
        &#xe845;
      </div>
    )) ||
    (icon === 'icon-norifications-normal' && (
      <div className={getClasses} {...rest}>
        &#xe846;
      </div>
    )) ||
    (icon === 'icon-norifications-bold' && (
      <div className={getClasses} {...rest}>
        &#xe847;
      </div>
    )) ||
    (icon === 'icon-numbers-0-normal' && (
      <div className={getClasses} {...rest}>
        &#xe848;
      </div>
    )) ||
    (icon === 'icon-numbers-1-normal' && (
      <div className={getClasses} {...rest}>
        &#xe849;
      </div>
    )) ||
    (icon === 'icon-numbers-2-normal' && (
      <div className={getClasses} {...rest}>
        &#xe84a;
      </div>
    )) ||
    (icon === 'icon-numbers-3-normal' && (
      <div className={getClasses} {...rest}>
        &#xe84b;
      </div>
    )) ||
    (icon === 'icon-numbers-4-normal' && (
      <div className={getClasses} {...rest}>
        &#xe84c;
      </div>
    )) ||
    (icon === 'icon-numbers-5-normal' && (
      <div className={getClasses} {...rest}>
        &#xe84d;
      </div>
    )) ||
    (icon === 'icon-numbers-6-normal' && (
      <div className={getClasses} {...rest}>
        &#xe84e;
      </div>
    )) ||
    (icon === 'icon-numbers-7-normal' && (
      <div className={getClasses} {...rest}>
        &#xe84f;
      </div>
    )) ||
    (icon === 'icon-numbers-8-normal' && (
      <div className={getClasses} {...rest}>
        &#xe850;
      </div>
    )) ||
    (icon === 'icon-numbers-9-normal' && (
      <div className={getClasses} {...rest}>
        &#xe851;
      </div>
    )) ||
    (icon === 'icon-numbers-10-normal' && (
      <div className={getClasses} {...rest}>
        &#xe852;
      </div>
    )) ||
    (icon === 'icon-numbers-0-bold' && (
      <div className={getClasses} {...rest}>
        &#xe853;
      </div>
    )) ||
    (icon === 'icon-numbers-1-bold' && (
      <div className={getClasses} {...rest}>
        &#xe854;
      </div>
    )) ||
    (icon === 'icon-numbers-2-bold' && (
      <div className={getClasses} {...rest}>
        &#xe855;
      </div>
    )) ||
    (icon === 'icon-numbers-3-bold' && (
      <div className={getClasses} {...rest}>
        &#xe856;
      </div>
    )) ||
    (icon === 'icon-numbers-4-bold' && (
      <div className={getClasses} {...rest}>
        &#xe857;
      </div>
    )) ||
    (icon === 'icon-numbers-5-bold' && (
      <div className={getClasses} {...rest}>
        &#xe858;
      </div>
    )) ||
    (icon === 'icon-numbers-6-bold' && (
      <div className={getClasses} {...rest}>
        &#xe859;
      </div>
    )) ||
    (icon === 'icon-numbers-7-bold' && (
      <div className={getClasses} {...rest}>
        &#xe85a;
      </div>
    )) ||
    (icon === 'icon-numbers-8-bold' && (
      <div className={getClasses} {...rest}>
        &#xe85b;
      </div>
    )) ||
    (icon === 'icon-numbers-9-bold' && (
      <div className={getClasses} {...rest}>
        &#xe85c;
      </div>
    )) ||
    (icon === 'icon-numbers-10-bold' && (
      <div className={getClasses} {...rest}>
        &#xe85d;
      </div>
    )) ||
    (icon === 'icon-play-normal' && (
      <div className={getClasses} {...rest}>
        &#xe85e;
      </div>
    )) ||
    (icon === 'icon-play-bold' && (
      <div className={getClasses} {...rest}>
        &#xe85f;
      </div>
    )) ||
    (icon === 'icon-question-normal' && (
      <div className={getClasses} {...rest}>
        &#xe860;
      </div>
    )) ||
    (icon === 'icon-question-bold' && (
      <div className={getClasses} {...rest}>
        &#xe861;
      </div>
    )) ||
    (icon === 'icon-rotate-left-normal.svg' && (
      <div className={getClasses} {...rest}>
        &#xe862;
      </div>
    )) ||
    (icon === 'icon-rotate-left-bold.svg' && (
      <div className={getClasses} {...rest}>
        &#xe863;
      </div>
    )) ||
    (icon === 'icon-rotate-right-normal.svg' && (
      <div className={getClasses} {...rest}>
        &#xe864;
      </div>
    )) ||
    (icon === 'icon-rotate-right-bold.svg' && (
      <div className={getClasses} {...rest}>
        &#xe865;
      </div>
    )) ||
    (icon === 'icon-search-normal' && (
      <div className={getClasses} {...rest}>
        &#xe866;
      </div>
    )) ||
    (icon === 'icon-search-bold' && (
      <div className={getClasses} {...rest}>
        &#xe867;
      </div>
    )) ||
    (icon === 'icon-setting-normal' && (
      <div className={getClasses} {...rest}>
        &#xe868;
      </div>
    )) ||
    (icon === 'icon-setting-bold' && (
      <div className={getClasses} {...rest}>
        &#xe869;
      </div>
    )) ||
    (icon === 'icon-star-normal' && (
      <div className={getClasses} {...rest}>
        &#xe86a;
      </div>
    )) ||
    (icon === 'icon-star-bold' && (
      <div className={getClasses} {...rest}>
        &#xe86b;
      </div>
    )) ||
    (icon === 'icon-target-normal' && (
      <div className={getClasses} {...rest}>
        &#xe86c;
      </div>
    )) ||
    (icon === 'icon-target-bold' && (
      <div className={getClasses} {...rest}>
        &#xe86d;
      </div>
    )) ||
    (icon === 'icon-timer-glass-normal' && (
      <div className={getClasses} {...rest}>
        &#xe86e;
      </div>
    )) ||
    (icon === 'icon-timer-glass-bold' && (
      <div className={getClasses} {...rest}>
        &#xe86f;
      </div>
    )) ||
    (icon === 'icon-timer-watch-normal' && (
      <div className={getClasses} {...rest}>
        &#xe870;
      </div>
    )) ||
    (icon === 'icon-timer-watch-bold' && (
      <div className={getClasses} {...rest}>
        &#xe871;
      </div>
    )) ||
    (icon === 'icon-trash-normal' && (
      <div className={getClasses} {...rest}>
        &#xe872;
      </div>
    )) ||
    (icon === 'icon-trash-bold' && (
      <div className={getClasses} {...rest}>
        &#xe873;
      </div>
    )) ||
    (icon === 'icon-triangle-up-normal' && (
      <div className={getClasses} {...rest}>
        &#xe874;
      </div>
    )) ||
    (icon === 'icon-triangle-right-normal' && (
      <div className={getClasses} {...rest}>
        &#xe875;
      </div>
    )) ||
    (icon === 'icon-triangle-down-normal' && (
      <div className={getClasses} {...rest}>
        &#xe876;
      </div>
    )) ||
    (icon === 'icon-triangle-left-normal' && (
      <div className={getClasses} {...rest}>
        &#xe877;
      </div>
    )) ||
    (icon === 'icon-triangle-up-bold' && (
      <div className={getClasses} {...rest}>
        &#xe878;
      </div>
    )) ||
    (icon === 'icon-triangle-right-bold' && (
      <div className={getClasses} {...rest}>
        &#xe879;
      </div>
    )) ||
    (icon === 'icon-triangle-down-bold' && (
      <div className={getClasses} {...rest}>
        &#xe87a;
      </div>
    )) ||
    (icon === 'icon-triangle-left-bold' && (
      <div className={getClasses} {...rest}>
        &#xe87b;
      </div>
    )) ||
    (icon === 'icon-unlock-normal' && (
      <div className={getClasses} {...rest}>
        &#xe87c;
      </div>
    )) ||
    (icon === 'icon-unlock-bold' && (
      <div className={getClasses} {...rest}>
        &#xe87d;
      </div>
    )) ||
    (icon === 'icon-user-normal' && (
      <div className={getClasses} {...rest}>
        &#xe87e;
      </div>
    )) ||
    (icon === 'icon-user-bold' && (
      <div className={getClasses} {...rest}>
        &#xe87f;
      </div>
    )) ||
    (icon === 'icon-close-normal' && (
      <div className={getClasses} {...rest}>
        &#xe880;
      </div>
    )) ||
    (icon === 'icon-close-bold' && (
      <div className={getClasses} {...rest}>
        &#xe881;
      </div>
    ))
  )
}
