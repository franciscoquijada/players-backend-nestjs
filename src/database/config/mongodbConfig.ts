export function mongodbConfig(): string {
  return `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_SRV}/${process.env.DATABASE_NAME}`
}
