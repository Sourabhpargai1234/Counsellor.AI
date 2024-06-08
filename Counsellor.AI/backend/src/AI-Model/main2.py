import os
import sys
from gradientai import Gradient

GRADIENT_ACCESS_TOKEN = os.getenv('GRADIENT_ACCESS_TOKEN')
GRADIENT_WORKSPACE_ID = os.getenv('GRADIENT_WORKSPACE_ID')

def main():
    if len(sys.argv) < 2:
        print("No question provided.")
        return

    question = sys.argv[1]

    with Gradient() as gradient:
        base_model = gradient.get_base_model(base_model_slug="nous-hermes2")

        new_model_adapter = base_model.create_model_adapter(
            name="test model 3"
        )
        print(f"Created model adapter with id {new_model_adapter.id}")
        sample_query = f"### Instruction: {question} \n\n### Response:"
        print(f"Asking: {sample_query}")

        # before fine-tuning
        completion = new_model_adapter.complete(query=sample_query, max_generated_token_count=100).generated_output
        print(f"Generated (before fine-tune): {completion}")

        samples = [
            { "inputs": "### Instruction: What is your branch \n\n### Response: Btech" },
            { "inputs": "### Instruction: Skills ? \n\n### Response: Coding, Development" },
            { "inputs": "### Instruction: Job? \n\n### Response: SDE at google" },
            { "inputs": "### Instruction: What is your branch \n\n### Response: Mechanical Engineering" },
            
        ]
        #num_epochs = 3
        #count = 0
        #while count < num_epochs:
         #   print(f"Fine-tuning the model, iteration {count + 1}")
        new_model_adapter.fine_tune(samples=samples)
          #  count = count + 1

        completion = new_model_adapter.complete(query=sample_query, max_generated_token_count=100).generated_output
        print(f"Generated (after fine-tune): {completion}")

        new_model_adapter.delete()

if __name__ == "__main__":
    main()
