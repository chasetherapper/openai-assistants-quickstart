export let assistantId = "asst_VE5EYSfWnYUBEi1ka02jl4df"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
