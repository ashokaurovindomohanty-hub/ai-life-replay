import Razorpay from "razorpay";
export async function POST(){
  const rzp = new Razorpay({
    key_id:process.env.RAZORPAY_KEY!,
    key_secret:process.env.RAZORPAY_SECRET!
  });
  const order = await rzp.orders.create({
    amount:79900,currency:"INR",receipt:"pro_1"
  });
  return Response.json(order);
}
