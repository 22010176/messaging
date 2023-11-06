import { useContext, useEffect, useState } from 'react'
import { collection, doc, limit, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore'

import './styles.scss'
import { AppContext } from '../App';
import { firestore } from '../../api';
import MessageConverter, { Message } from '../../api/models/Messages';
import { v4 } from 'uuid';

export default function () {


  return (
    <h1>Chat app</h1>
  )
}