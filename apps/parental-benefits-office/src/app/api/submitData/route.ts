import { NextResponse } from "next/server";
import { getAgentUserSession } from "../../session";
import { controllerSubmitData } from "solid";
import { GOV } from "vocab";

function getRandomIntBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min).toString();
}

export async function POST(request: Request) {
  try {
    const session = await getAgentUserSession();
    const additionalData = {
      [GOV.ParentalBenefitAmount.value]: getRandomIntBetween(300, 1801),
    };
    return controllerSubmitData({ request, session, additionalData });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
