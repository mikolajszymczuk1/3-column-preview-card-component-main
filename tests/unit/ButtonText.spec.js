import { mount } from "@vue/test-utils";
import ButtonText from "@/components/Buttons/ButtonText.vue";

describe("ButtonText.vue", () => {
    test("depending on the value of buttonType prop should create the correct class", () => {
        const wrapper = mount(ButtonText, {
            propsData: { 
                buttonType: "sedans"
            }
        });

        expect(wrapper.props("buttonType")).toBe("sedans");
        expect(wrapper.classes()).toContain("button-text--sedans");
    });

    test("default slot should show content", () => {
        const wrapper = mount(ButtonText, {
            propsData: { 
                buttonType: "sedans"
            },
            slots: { 
                default: "Some content"
            }
        });

        expect(wrapper.text()).toContain("Some content");
    });
});
