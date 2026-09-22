// Lightweight reactive store with event bus
class Store extends EventTarget {
  constructor() {
    super();
    this.state = {
      activeCluster: 'all',
      selectedSubsectorId: 'kriya',
      activeEventTab: 'upcoming',
      isMobileMenuOpen: false,
      activeModal: null, // 'investor-modal' | 'register-modal'
      selectedProjectForInvestment: null,
      stepper: {
        step: 1,
        maxSteps: 5,
        formData: {
          fullName: '',
          businessName: '',
          subsector: 'kriya',
          scale: 'Usaha Mikro (Omzet < Rp 300 Juta)',
          legalities: ['NIB'],
          developmentNeeds: 'Permodalan & Pemasaran Digital',
          dataConsent: false
        }
      }
    };
  }

  getState() {
    return this.state;
  }

  setState(updates) {
    this.state = { ...this.state, ...updates };
    this.dispatchEvent(new CustomEvent('stateChange', { detail: this.state }));
  }

  setActiveCluster(clusterId) {
    this.setState({ activeCluster: clusterId });
    this.dispatchEvent(new CustomEvent('clusterChange', { detail: clusterId }));
  }

  setSelectedSubsector(subsectorId) {
    this.setState({ selectedSubsectorId: subsectorId });
    this.dispatchEvent(new CustomEvent('subsectorChange', { detail: subsectorId }));
  }

  setActiveEventTab(tab) {
    this.setState({ activeEventTab: tab });
    this.dispatchEvent(new CustomEvent('eventTabChange', { detail: tab }));
  }

  toggleMobileMenu(isOpen) {
    const nextState = isOpen !== undefined ? isOpen : !this.state.isMobileMenuOpen;
    this.setState({ isMobileMenuOpen: nextState });
    this.dispatchEvent(new CustomEvent('mobileMenuChange', { detail: nextState }));
  }

  openModal(modalType, extraData = null) {
    this.setState({
      activeModal: modalType,
      selectedProjectForInvestment: extraData
    });
    this.dispatchEvent(new CustomEvent('modalChange', { detail: { modalType, extraData } }));
  }

  closeModal() {
    this.setState({
      activeModal: null,
      selectedProjectForInvestment: null
    });
    this.dispatchEvent(new CustomEvent('modalChange', { detail: { modalType: null } }));
  }

  updateStepper(step, partialFormData = {}) {
    const updatedFormData = {
      ...this.state.stepper.formData,
      ...partialFormData
    };
    this.setState({
      stepper: {
        ...this.state.stepper,
        step: Math.min(Math.max(step, 1), this.state.stepper.maxSteps),
        formData: updatedFormData
      }
    });
    this.dispatchEvent(new CustomEvent('stepperChange', { detail: this.state.stepper }));
  }
}

export const store = new Store();
