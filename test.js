import { JsonBank } from 'jsonbank';
import dotenv from 'dotenv';

dotenv.config()

async function main() {
  const jsb = new JsonBank();
  
  const content = await jsb.getContent(process.env.JSONBANK);

  console.log("Name:" + content.name);
}
  
main();