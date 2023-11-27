import { Client, Room } from '@liveblocks/client'
import { User } from "./types";

export default {
  client: null,
  room: null
} as { client: Client, room: Room<User, {}, {} ,{}> }
