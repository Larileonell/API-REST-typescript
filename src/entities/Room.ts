import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Video } from "./video";
@Entity('Roons')
export class Room {   
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'text'})
    name: string

    @OneToMany(() =>Video, (Video) => Video.room)
    videos: Video[]
}