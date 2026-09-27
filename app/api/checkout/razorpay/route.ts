import Razorpay from "razorpay";
export async function POST(req: Request){
  const { currency="INR" } = await req.json().catch(()=>({}));
  const prices:any={INR:79900,USD:999,EUR:999};
  const rzp = new Razorpay({ key_id:process.env.RAZORPAY_KEY!, key_secret:process.env.RAZORPAY_SECRET! });
  const order = await rzp.orders.create({ amount:prices[currency.toUpperCase()], currency, receipt:"pro_"+Date.now() });
  return Response.json(order);
}
