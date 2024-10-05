from transformers import AutoModelForCausalLM, AutoTokenizer, TextStreamer

model_name_or_path = "TheBloke/Mistral-7B-Instruct-v0.2-AWQ"

# model_name_or_path = "mistralai/Mistral-7B-Instruct-v0.2"

tokenizer = AutoTokenizer.from_pretrained(model_name_or_path)

model = AutoModelForCausalLM.from_pretrained(
    model_name_or_path,
    low_cpu_mem_usage=True,
    device_map="cuda:0"
)

# Using the text streamer to stream output one token at a time
streamer = TextStreamer(tokenizer, skip_prompt=True, skip_special_tokens=True)

def get_output(input):

    prompt = input
    prompt_template=f'''<s>[INST] {prompt} [/INST]
    '''

    # Convert prompt to tokens
    tokens = tokenizer(
        prompt_template,
        return_tensors='pt'
    ).input_ids.cuda()

    generation_params = {
        "do_sample": True,
        "temperature": 0.7,
        "top_p": 0.95,
        "top_k": 40,
        "max_new_tokens": 512,
        "repetition_penalty": 1.1
    }

    # Inference is also possible via Transformers' pipeline
    from transformers import pipeline

    pipe = pipeline(
        "text-generation",
        model=model,
        tokenizer=tokenizer,
        **generation_params
    )

    pipe_output = pipe(prompt_template)[0]['generated_text']
    # print("pipeline output: ", pipe_output)

    return pipe_output

