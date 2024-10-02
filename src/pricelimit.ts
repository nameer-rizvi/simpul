function pricelimit(price: number, limit: number): number {
  return Math.ceil((price + price * limit) * 100) / 100;
}

export default pricelimit;
