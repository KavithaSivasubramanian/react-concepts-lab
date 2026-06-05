import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { Login } from './components/Login/login'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
//import {DataBinding} from'./components/array-data-binding/array-data-binding'
//import {DataBinding} from'./components/data-binding/data-binding'
import {Flipkart} from'./components/flipKart/flipKart'
import { Nasa } from './components/nasa/nasa'
import { EventBinding } from './components/event-binding/event-binding'
import { MouseEvent } from './components/mouse-event/mouse-event'
import { MouseMove } from './components/mouse-move/mouse-move'
import { MouseOver } from './components/mouse-over/mouse-over'
import { KeyDemo } from './components/key-demo/key-demo'
import { PasswordStrength } from './components/password-strength/password-strength'
import { PasswordProgress } from './components/password-progress/password-progress'
import { FocusDemo } from './components/focus-demo/focus-demo'
import { DebounceDemo } from './components/debounce-demo/debounce-demo'
import { TimerDemo } from './components/timer-demo/timer-demo'
import {TimeoutDemo} from './Components/timeout-demo/timeout-demo'
import { CarouselDemo } from './components/carousel-demo.jsx/carousel-demo'
import { FormDemo } from './components/form-demo/form-demo'
import { FormikComponentDemo } from './components/formik-component-demo.jsx/formik-component-demo'
import { HookFormDemo } from './components/hook-form-demo/hook-form-demo'
import { ControlledDemo } from './components/controlled-demo/controlled-demo'
import { ConditionDemo } from './components/condition-demo/condition-demo'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConditionDemo/>
  </StrictMode>,
)
 