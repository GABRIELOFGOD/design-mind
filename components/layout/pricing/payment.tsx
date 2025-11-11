import Image from "next/image";

const Payment = () => {
  const paymentMethods = [
    {
      id: 1,
      name: "Stripe",
      icon: "/logo/stripe.svg"
    },
    {
      id: 2,
      name: "PayPal",
      icon: "/logo/paypal.svg"
    },
    {
      id: 3,
      name: "Apple pay",
      icon: "/logo/apple-pay.svg"
    },
    {
      id: 4,
      name: "Google pay",
      icon: "/logo/google-pay.svg"
    },
    {
      id: 5,
      name: "Card",
      icon: "/logo/card.svg"
    }
  ];
  
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <p className="text-center text-xl font-semibold">Secure payments powered by</p>
      
      <div className="flex gap-10 mx-auto my-auto mt-10">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
          >
            <Image
              src={method.icon}
              alt={method.name}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Payment;