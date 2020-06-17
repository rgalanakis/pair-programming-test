package gtd_test

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	"github.com/rgalanakis/pair-programming-test"
	"testing"
)

func Test(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "test Suite")
}

var _ = Describe("main", func() {
	It("runs tests", func() {
		Expect(gtd.ReturnOne()).To(BeEquivalentTo(1))
	})
})
