import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuiv4 } from 'uuid';

@Entity("moviments")
class Moviment {
    @PrimaryColumn()
    id?: string;

    @Column()
    description: string;

    @Column()
    type_moviment: boolean;

    product_id: string;

    @Column()
    quantity: number;

    
    address_id: string;

    constructor(){
        if(!this.id){
            this.id = uuiv4();
        }
    }
}

export { Moviment }