import { mount } from "@vue/test-utils";
import CardSingle from "@/components/CardPreview/CardSingle.vue";

describe("CardSingle.vue", () => {
    test("Slots should show content in the right places", () => {
        const wrapper = mount(CardSingle, {
            propsData: {
                cardType: "suvs"
            },
            slots: {
                cardTitle: "card title",
                cardText: "card text"
            }
        });

        expect(wrapper.find(".card-single__title").text()).toContain("card title");
        expect(wrapper.find(".card-single__text").text()).toContain("card text");
    });

    test("based on cardType prop, should generate the correct class", () => {
        const wrapper = mount(CardSingle, {
            propsData: {
                cardType: "suvs"
            }
        });

        expect(wrapper.props("cardType")).toBe("suvs");
        expect(wrapper.classes()).toContain("card-single--suvs");
    });

    test("based on cardType prop, should show corresponding icon", () => {
        const wrapper = mount(CardSingle, {
            propsData: {
                cardType: "luxury"
            }
        });

        let icon = wrapper.find(".card-single__car-icon");
        expect(icon.attributes("title")).toBe("luxury");
    });
});
