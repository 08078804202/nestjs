import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Generated } from "typeorm"
@Entity()
export class Girl {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ type: "varchar", length: 200 })
    name: string
    @Column({ type: "int" })
    age: number
    @Column({ type: "varchar" })
    skill: string
    @CreateDateColumn({ type: "timestamp" })
    entryTime: Date
    // @Generated("uuid")
    // uuid: string
}
