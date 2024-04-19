import { ProductInfoEntity } from 'src/modules/product_info/entities/product_info.entity';
import { ProductEntity } from 'src/modules/products/entities/product.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'image' })
export class ImageEntity {
  @PrimaryGeneratedColumn()
  image_id: number;
  @Column({
    type: 'longtext',
  })
  image_path: string;

  // @ManyToOne(() => ProductInfoEntity, (product_info) => product_info.images)
  // @JoinColumn({ name: 'product_info_id' })
  // product_info_id: ProductInfoEntity;

  // @ManyToOne(() => ProductEntity, (product) => product.images)
  // @JoinColumn({ name: 'product_id' })
  // product: ProductEntity;
}
