from transformers import GPT2Tokenizer, GPT2LMHeadModel

# Load pre-trained GPT-2 tokenizer and model
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained("gpt2")

# Define input text
input_text = "Once upon a time"

# Tokenize input text
input_ids = tokenizer.encode(input_text, return_tensors="pt")

# Generate text
num_return_sequences = 5
generated_texts = []

for _ in range(num_return_sequences):
    output = model.generate(input_ids, max_length=50, temperature=0.7, num_return_sequences=1)
    generated_text = tokenizer.decode(output[0], skip_special_tokens=True)
    generated_texts.append(generated_text)

# Print generated text
for i, text in enumerate(generated_texts):
    print(f"Generated Text {i+1}: {text}")
