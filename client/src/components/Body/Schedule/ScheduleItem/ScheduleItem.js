import React from 'react'
import { inject, observer } from 'mobx-react'

import "./ScheduleItem.css"

export const ScheduleItem = inject('app', 'user')(observer(props =>
  <li className={`${props.classPref}-item`}>
    <div className={`${props.classPref}-item__left`}>
      
      <div className={`${props.classPref}-item__left__title`}>
        <span className={`${props.classPref}-item__left__title-item`}>
          Date
        </span>
        <span className={`${props.classPref}-item__left__title-item`}>
          Subject 
        </span>
        <span className={`${props.classPref}-item__left__title-item`}>
          Group
        </span>
        <span className={`${props.classPref}-item__left__title-item`}>
          Room  
        </span>
      </div>

      <div className={`${props.classPref}-item__left__separator`}>
        <span className={`${props.classPref}-item__left__separator-item`}>
          &raquo; 
        </span>
        <span className={`${props.classPref}-item__left__separator-item`}>
          &raquo; 
        </span>
        <span className={`${props.classPref}-item__left__separator-item`}>
          &raquo; 
        </span>  
        <span className={`${props.classPref}-item__left__separator-item`}>
          &raquo; 
        </span> 
      </div> 

      <div className={`${props.classPref}-item__left__value`}>
        <span className={`${props.classPref}-item__left__value-item`}>
          {props.date}
        </span>
        <span className={`${props.classPref}-item__left__value-item`}>
          {props.subjectName}
        </span>
        <span className={`${props.classPref}-item__left__value-item`}>
          {props.groupName}
        </span>
        <span className={`${props.classPref}-item__left__value-item`}>
          {props.classRoom}
        </span>
      </div>

    </div>




    <div className={`${props.classPref}-item__right`}>
      <div className={`${props.classPref}-item__right__title`}>
        <span className={`${props.classPref}-item__right__title-item`}>
          Time 
        </span>
        <span className={`${props.classPref}-item__right__title-item`}>
          Time Left
        </span>
      </div>

      <div className={`${props.classPref}-item__right__separator`}>
        <span className={`${props.classPref}-item__right__separator-item`}>
          &raquo;
        </span>
        <span className={`${props.classPref}-item__right__separator-item`}> 
          &raquo;
        </span>
      </div>

      <div className={`${props.classPref}-item__right__value`}>
        <span className={`${props.classPref}-item__right__value-item`}> 
          {props.time}
        </span>
        <span className={`${props.classPref}-item__right__value-item`}> 
          xx:xx
        </span>
      </div>
  
    </div>
  </li>

  
))