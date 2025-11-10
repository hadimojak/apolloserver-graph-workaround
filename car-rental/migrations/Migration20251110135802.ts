import { Migration } from '@mikro-orm/migrations';

export class Migration20251110135802 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "car" ("id" uuid not null, "brand" varchar(255) not null default '', "model" varchar(255) not null default '', "year" int not null default 0, "is_available" boolean not null default true, constraint "car_pkey" primary key ("id"));`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "car" cascade;`);
  }

}
