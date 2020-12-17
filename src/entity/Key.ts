import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Reader } from "./Reader";

@Entity()
export class Key {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 20, nullable: false })
    uid: string;

    @Column("varchar", { nullable: false })
    name: string;

    @Column("timestamp", {default: ()=>'CURRENT_TIMESTAMP'})
    validUntil: Date

    @Column("bool", { default: false, nullable: false })
    isOneTimeCode: boolean

    @Column("integer", { default: 1 })
    acctype: number

    @Column("integer", { default: 0 })
    acctype2: number

    @Column("integer", { default: 0 })
    acctype3: number

    @Column("integer", { default: 0 })
    acctype4: number



    @ManyToMany(type => Reader, reader => reader.keys)
    readers: Reader[];

}
