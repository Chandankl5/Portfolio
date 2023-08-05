import { cache } from "react";

import client from "./createClient";

async function getEntries(type) {
  try {
    let response = await client.getEntries({
      content_type: type
    });
    return response;
  }
  catch(error) {
    throw(error);
  }
}

export default cache(getEntries);