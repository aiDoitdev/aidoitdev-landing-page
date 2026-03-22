/**
 * Use cases data - English only
 */

export interface UseCase {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  problemStatement: string;
  benefit: string;
  example: {
    title: string;
    code: string;
    explanation: string;
  };
  callToAction: string;
}

export const USE_CASES: UseCase[] = [
  {
    id: 'ai-lead-reactivation-agent',
    slug: 'ai-lead-reactivation-agent',
    title: 'The $10,000 Ghost: Building an AI Lead Reactivation Agent',
    description: 'Learn how to build an autonomous AI agent that reactivates dormant leads automatically, saving weeks of manual work and generating revenue from your existing customer database.',
    shortDescription: 'Build an autonomous AI agent that reactivates dormant leads automatically using LangGraph and Vapi.ai',
    icon: '🤖',
    problemStatement: 'Small businesses typically have hundreds or thousands of dormant leads gathering dust in their CRM. Following up on these leads manually is slow, expensive, and tedious. Yet, these dormant leads represent significant untapped revenue—each successful booking might be worth thousands in lifetime value.',
    benefit: 'An autonomous lead reactivation agent can handle all this work for you. It reaches out to prospects, qualifies them, schedules meetings, and does it all at the speed of an AI. The return on investment is staggering—recoup your development effort in just 3 successful bookings.',
    example: {
      title: 'Building a Lead Reactivation Agent with LangGraph',
      code: 'from typing import TypedDict, Optional\nimport anthropic\nfrom langgraph.graph import StateGraph\nfrom vapi_python import Vapi\n\n# Step 1: Define State for the agent\nclass AgentState(TypedDict):\n    lead_name: str\n    lead_email: str\n    conversation_history: list\n    call_result: Optional[str]\n\n# Step 2: Set up Vapi client for voice calls\nvapi = Vapi(api_key="YOUR_VAPI_KEY")\n\n# Step 3: Create LangGraph nodes\ndef analyze_lead_node(state: AgentState) -> AgentState:\n    """Analyze lead eligibility\"\"\"\n    # Determine if lead is worth contacting\n    return state\n\ndef call_lead_node(state: AgentState) -> AgentState:\n    """Make voice call to lead via Vapi\"\"\"\n    response = vapi.create_call(\n    entity=CallEntity(name=state["lead_name"], number=state["lead_phone"]),\n    assistant_id="YOUR_ASSISTANT_ID"\n    )\n    state["call_result"] = response.status\n    return state\n\n# Step 4: Build the graph\ngraph_builder = StateGraph(AgentState)\ngraph_builder.add_node("analyze", analyze_lead_node)\ngraph_builder.add_node("call", call_lead_node)\ngraph_builder.add_edge("analyze", "call")\ngraph_builder.set_entry_point("analyze")\n\nreactivation_agent = graph_builder.compile()',
      explanation: 'This example shows how to combine LangGraph for workflow orchestration with Vapi.ai for voice calling. The agent analyzes leads in your database, determines which ones are worth calling, and then initiates voice calls. Vapi handles the entire conversation, qualification, and scheduling automatically. Your development effort pays off in days, not months.'
    },
    callToAction: 'Ready to build your own autonomous AI agent? Start with LangGraph for workflow orchestration and integrate Vapi.ai for voice capabilities. The combination is powerful and you\'ll be surprised at what you can accomplish in a weekend.'
  }
];
