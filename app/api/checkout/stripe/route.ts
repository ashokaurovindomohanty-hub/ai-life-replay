import Stripe from "stripe";
const stripe = process.env.STRIPE_SECRET ? new Stripe(process.env.STRIPE_SECRET) : null as any;
export async function POST(req:Request){
if(!stripe) return Response.json({error:"Stripe not configured"}, {status:500});
const {currency="inr"} = await req.json();
const prices:any={inr:79900,usd:999,eur:999};
const session = await stripe.checkout.sessions.create({
line_items:[{price_data:{ currency,product_data:{name:"AI Life Replay Pro"}, unit_amount:prices[currency]},quantity:1}],
mode:"payment",success_url:"http://localhost:3000/success", cancel_url:"http://localhost:3000/cancel" });
return Response.json({url:session.url});
}
