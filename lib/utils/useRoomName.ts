import globals from '../globals'
import { useEffect, useState } from 'react'
import { whenRoomReady } from './whenRoomReady'

export function useRoomName () {
  const [roomName, setRoomName] = useState<string>()

  useEffect(() => {
    whenRoomReady(() => setRoomName(globals.room.id))
  }, [])

  return roomName
}
